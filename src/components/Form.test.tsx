import { fireEvent, screen } from "@testing-library/dom"
import { render } from "@testing-library/react"
import React from "react"
import { Form } from "./Form"

//Jest

test('when the input is empty, new users cant be add', () => {
    render(<Form />)
    
    //Find the input in DOM
    const input = screen.getByPlaceholderText('Insert the participants names') //find the placeholder text

    //Find the button
    const button = screen.getByRole('button') //find the element for your responsability

    //ensure the input is in the document
    expect(input).toBeInTheDocument() //make sure to the input is be in the document

    //ensure to the button is be disabled
    expect(button).toBeDisabled() //make sure the button is disabled
})

test('adding partcipants when label is fill', () => {
    //Find the input in DOM
    const input = screen.getByPlaceholderText('Insert the participants names') //find the placeholder text

    //Find the button
    const button = screen.getByRole('button') //find the element for your responsability

    //insert a value in input
    fireEvent.change(input, {
        target: {
            value: 'Vinicius Testing'
        }
    })

    //click to submit
    fireEvent.click(button)

    //make sure to input focus is on
    expect(input).toHaveFocus()

    //make sure to input dont have a value
    expect(input).toHaveValue("")
})