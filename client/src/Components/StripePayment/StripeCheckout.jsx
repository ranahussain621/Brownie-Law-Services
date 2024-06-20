
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import Form from "./Form"

const PUBLIC_KEY = "pk_test_51OJv7nFQrUc7kcZayR1JBY85cFXX1Aex2g0iIe3aLc4ipc3vWV8K9iZWMhqkpbHFux4CkrgTrPVpTMJyhMdV2gAn00tXGr7ZGM"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripePayment() {
	return (
		<Elements stripe={stripeTestPromise}>
			<Form />
		</Elements>
	)
}
