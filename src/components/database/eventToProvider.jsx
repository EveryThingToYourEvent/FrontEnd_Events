import React, { useEffect, useState } from 'react'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { createEventId } from './event-utils'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getEventsToProviderByID } from '../../redux/axios/eventToProviderAxios'
import { FillEventsProviderById } from '../../redux/action/eventToProviderAction'
import { Refresh } from '@mui/icons-material'
import { event } from 'jquery'

export default function EventToProvider() {
  // the current provider
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let currProviderID = useSelector(pid => pid.ProviderReducer.currProviderPass)
  let currUser = useSelector(u => u.UserReducer.userCurrentID)


  // הספק שבחרו מתפריט הספקים
  let currProvider = useSelector(p => p.ProviderReducer.currProvider)


  //   useEffect(() => {
  //     debugger
  //     console.log(currProvider);
  //     getEventsToProviderByID(currProvider).then(etp => {
  //         dispatch(FillEventsProviderById(etp.data))
  //     })  
  // },[])
  // let d= useDispatch()
  const [events, setEvents] = useState()
  // const list = useSelector(state => state.EventToProviderReducer.listEventProvider)
  // const list1 = list.map(event => {
  //   return ({ providerId: event.provCode, start: event.epdate, userId: event.userId, title: 'תפוס', backgroundColor: event.backgroundColor })
  // })
  // console.log(list);
  // console.log(list1)
  const [INITIAL_EVENTS, setINITIAL_EVENTS] = useState(null)
  // עובד טוב בספקים אך לא במשתמשים
  // currProviderID == currUser ? list :list1

  //   listProviderCategory.map((j, i) => (
  //     <option key={i} value={j.pccode}>{j.pcname}</option>
  // ))
  // .map(event=>{
  //   return({ providerId: event.provCode, start: event.epdate, userId: event.userId, title: 'תפוס', backgroundColor:event.backgroundColor})
  // })
  // getEventsToProviderByID(currProvider).then(h=>{
  //   console.log(h.data);
  //  setINITIAL_EVENTS( currProviderID==currUser
  //   ?h.data
  //   :h.data.map(event => {
  //     return ({ providerId: event.provCode, start: event.epdate, userId: event.userId, title: 'תפוס', backgroundColor:event.backgroundColor})
  //   }))})
  // dispatch(FillEventsProviderById(INITIAL_EVENTS))
  //  useState(useSelector(state => state.EventToProviderReducer.listEventProvider));
  // console.log(INITIAL_EVENTS);

  // עובד רק כאשר מרנדרים את הדף שוב
  useEffect(() => {
    getEventsToProviderByID(currProvider).then((res) => {
      setEvents(res.data)
      

      

    })
    // .then(() => {

    //   !events ? console.log('the axios doesnt finish') : console.log('it return with data');
    //   console.log('events', events);
    //   const relevantDataByUser = !!currProviderID ? events
    //     // : console.log("uuuuuuuuuuuuuuuuu");
    //     : events.map(event => {
    //       return ({ providerId: event.provCode, start: event.epdate, userId: event.userId, title: 'תפוס', backgroundColor: event.backgroundColor })
    //     })
    //   console.log(relevantDataByUser)
    // })


    // console.log(relevantDataByUser);
    console.log("llllllllllllllllllllll")

    // setINITIAL_EVENTS(relevantDataByUser)
    console.log(INITIAL_EVENTS)
    dispatch(FillEventsProviderById(events))

    // Refresh()
  }, [])
  useEffect(() => {

    if (!!events && events.length) {

      setINITIAL_EVENTS( !!currProviderID
        ? events
        : events.map(event => {
          return ({ providerId: event.provCode, start: event.epdate, userId: event.userId, title: 'תפוס', backgroundColor: event.backgroundColor })
        }))
    }
  }, [events])
  // getEventsToProviderByID(currProvider).then(h=>{
  //   console.log(h.data);
  //   const relevantDataByUser = currProviderID==currUser
  //   ?h.data
  //   :h.data.map(event => {
  //     return ({ providerId: event.provCode, start: event.epdate, userId: event.userId, title: 'תפוס', "backgroundColor":event.backgroundColor})
  //   })
  //   console.log(relevantDataByUser);
  //   console.log("llllllllllllllllllllll")
  //   setINITIAL_EVENTS(relevantDataByUser)
  //   d(FillEventsProviderById(h.data))
  // })
  // getEventsToProviderByID(currProvider).then(h=>{
  //   console.log(h.data);
  //   const relevantDataByUser = currProviderID==currUser
  //   ?h.data
  //   :h.data.map(event => {
  //     return ({ providerId: event.provCode, start: event.epdate, userId: event.userId, title: 'תפוס', backgroundColor: event.backgroundColor })
  //   })
  //   setINITIAL_EVENTS(relevantDataByUser)
  //   d(FillEventsProviderById(h.data))
  // })
  // console.log(`${currProviderID == currUser} user or provider list`, INITIAL_EVENTS);
  // useEffect(() => {
  //   console.log("$$$$$$$$$$$$$$$$");

  // }, [])
  const [weekendsVisible, setWeekendsVisible] = React.useState(true)
  const [currentEvents, setCurrentEvents] = React.useState([])
  let listEventProviderByID = useSelector(e => e.EventToProviderReducer.listEventProvider)
  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible)
  }

  function handleDateSelect(selectInfo) {
    debugger
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar
    calendarApi.unselect() // clear date selection
    console.log(listEventProviderByID);
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
    navigate(`/login`, { state: selectInfo.start })
  }

  function handleEventClick(clickInfo) {
    debugger
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  function handleEvents(events) {
    debugger
    setCurrentEvents(events)
  }

  function renderEventContent(eventInfo) {
    debugger
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  function renderSidebarEvent(event) {
    debugger
    return (
      <li key={event.id}>
        <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
        <i>{event.title}</i>
      </li>
    )
  }

  function dayCellContent(dayCellInfo) {
    const navigateToDay = () => {
      alert('אתה לא רשום, מעביר אותך לדף הרשמה')
      navigate(`/login`)
    }

    return (
      <>
        {/* <button onClick={navigateToDay}>לקביעת אירוע</button> */}
        <span>{dayCellInfo.dayNumberText}</span>
      </>
    )
  }


  return (
    <div>{
      !!INITIAL_EVENTS ? <div className='demo-app'>
        <div className='demo-app-sidebar'>
          <div className='demo-app-sidebar-section'>
            <h2>Instructions</h2>
            <ul>
              <li>Select dates and you will be prompted to create a new event</li>
              <li>Drag, drop, and resize events</li>
              <li>Click an event to delete it</li>
            </ul>
          </div>
          <div className='demo-app-sidebar-section'>
            <label>
              <input
                type='checkbox'
                checked={weekendsVisible}
                onChange={handleWeekendsToggle}
              ></input>
              toggle weekends
            </label>
          </div>
          <div className='demo-app-sidebar-section'>
            <h2>All Events ({currentEvents.length})</h2>
            <ul>{currentEvents.map(renderSidebarEvent)}</ul>
          </div>
        </div>
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={weekendsVisible}
            initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
            //  you can update a remote database when these fire:
            eventAdd={function () { }}
            eventChange={function () { }}
            eventRemove={function () { }}
            dayCellContent={dayCellContent}
          />
        </div>
      </div>
        : <>loading....</>
    }</div>
  )

}