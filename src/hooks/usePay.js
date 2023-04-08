import React, { useEffect, useState } from 'react';
import { usePaystackPayment } from 'react-paystack';
import env from '../env';
import { naira2kobo } from '../helper/kobo';

function usePay() {
  const [amount, setAmount] = useState(null);
  const [email, setEmail] = useState(null);
  const [reference, setReference] = useState(null);

  const config = {
    reference: "APRK-" + (new Date()).getTime().toString(),
    email: email ? email : 'test@example.com',
    amount: amount ? naira2kobo(amount) : '',
    publicKey: env.paystack_key,
  };

  const onSuccess = (reference) => {
    setReference(reference);
    setEmail(null)
    setAmount(null);
  };

  const onClose = () => {
    setReference('closed');
    setEmail(null)
    setAmount(null);
    setTimeout(() => {
      setReference(null)
    }, 50);
  };

  const initializePayment = usePaystackPayment(config);

  const triggerPayment = () => {
    if (amount && email) {
      initializePayment(onSuccess, onClose);
    }
  };

  useEffect(() => {
    triggerPayment();
  }, [amount]);

  const pay = async (options) => {
    setReference(null)
    setEmail(options.email);
    setAmount(options.amount);
  };

  return [pay, reference];
}

export default usePay;
