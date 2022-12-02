import { useState } from 'react'
import { PayPalButtons } from "@paypal/react-paypal-js"

const PayPalCheckoutButton = (props) => {
    const { product } = props

    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)

    const handleApprove = (orderId) => {
        // Call backend function to fulfill order

        // if response is success
        setPaidFor(true)
        // Refresh user's account of subscription status

        // if the response is an error 
        // setError('Your order was approved. However, we are unable to fulfil your purchase. Please contact info@goalsandassists for assistance')
    }

    if(paidFor) {
        //Display a success message, modal or redirect use to the success page
        alert('Thank you for your donation to Goals and Assists!')
    }

    if (error) {
        //Display an error message, modal or redirct user to the error page
        alert(error)
    }

    return (
        <PayPalButtons 
            style={{
                shape: 'pill',
                label: 'donate'
            }}
            // onClick={(data, actions) => {
            //     // Validate on button click, client or server side

            // }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.description,
                            amount: {
                                value: product.price
                            }
                        }
                    ]
                })
            }}
            onApprove={async(data, actions) => {
                const order = await actions.order.capture()
                console.log('order', order)
                
                handleApprove(data.orderID)
            }}
            onCancel={() => {
                // Display cancel message, modal, or redirect to cancel page or back to cart
            }}
            onError={(err) => {
                setError(err)
                console.log('PayPal Checkout onError', err)
            }}
        />
    )
}

export default PayPalCheckoutButton