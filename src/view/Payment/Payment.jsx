import React, { useState,Component } from 'react';
import "./Payment.css";
import { Button } from '@chakra-ui/react';
import axios from 'axios';


function PaymentAndOrder() {
 return (
 <div>
  <form action="https://localhost:7067/v2/api/Payment" method="POST">
    <Button type="submit">Subbmit</Button>
    </form>
 </div>
 )
};
    
export default PaymentAndOrder;