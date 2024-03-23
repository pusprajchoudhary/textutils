import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);

    }
  return (
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">  {/*props.alert && ye jo method hai isme phle props.alert evaluate hogi or uske agge ki chiz return hogi or agar ye value null hai to aage ki chiz bhi evaluate ni hogi*/}
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
   </div>
  )
}

export default Alert
