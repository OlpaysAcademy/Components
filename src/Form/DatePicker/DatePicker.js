//@flow
import React from 'react'
import ReactDatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const DatePicker = (props: any) => {
    return (
        <ReactDatePicker
            {...props}
            //Use the FormControl style
            className='DatePicker FormControl form-control'
            />
    )
}

export default DatePicker;