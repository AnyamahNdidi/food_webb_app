import React from 'react';

import { usePaystackPayment } from 'react-paystack';

import { Button } from 'antd'


function Payment({ totalPrice }) {
  console.log("This is the Total cost", totalPrice);
  const t = parseInt(Math.ceil(totalPrice));
  console.log("t: ", t);
  const config = {
    reference: new Date().getTime(),
    email: "user@example.com",
    amount: t * 100,
    publicKey: "pk_test_d632bf4b9aa1e74745eb158cec8034961dc13b18",
  };

  const onSuccess = (reference) => {
    console.log(reference);
  };

  const onClose = () => {
    console.log("closed");
  };
  const initializePayment = usePaystackPayment(config);
  return (
    <div >
      <Button

        style={{
          width: "370px",
          background: "#FF8120",
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
          height: "50px"
        }}

        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}

      >
        Proceed To Payment
      </Button>

    </div>
  );
}

export default Payment;