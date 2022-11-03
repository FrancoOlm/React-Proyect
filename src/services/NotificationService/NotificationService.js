import { useState, createContext } from 'react'

const Notification = ({ message, severity }) => {
    const notificationStyles = {
      position: 'absolute',
      top: 100,
      right: 10,
      width: 'auto',
      height: 'auto',
      backgroundColor: severity === 'success' ? '#17bf2b' : '#c41010',
      color: 'white',
      borderRadius: '20px',
      padding: '10px 20px 10px 20px',
      transition:'2s'
    }
  
    if(message === '') return

    return (
      <div style={notificationStyles} className={severity === 'success' ? 'greenClass' : 'redClass'}>
        {message}
      </div>
    )
  }
  
export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (severity, message) => {
        setSeverity(severity)
        setMessage(message)

        setTimeout(() => {
            setMessage('')
        }, 2000)
    }

    return(
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification severity={severity} message={message}/>
            {children}
        </NotificationContext.Provider>
    )
}