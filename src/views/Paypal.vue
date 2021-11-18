<template>
  <div id="paypal"></div>
</template>

<script>
import { loadScript } from '@paypal/paypal-js';

export default {
  name: 'Paypal',
  components: {},
  created() {
    loadScript({
      'client-id':
        'AUwh2gl3XAkmXP8syeXtHookZt6n4aA7o6ItPo7zq9IRIHo8ktZzbTV-hdBGLJfkAmzjOo4xNkI3QXyh',
      'data-namespace': 'paypal_sdk',
    })
      .then((paypal) => {
        paypal
          .Buttons({
            createOrder: function (data, actions) {
              // Set up the transaction
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: '100',
                    },
                  },
                ],
              });
            },
          })
          .render('#paypal')
          .catch((error) => {
            console.error('failed to render the PayPal Buttons', error);
          });
      })
      .catch((err) => {
        console.error('failed to load the PayPal JS SDK script', err);
      });
  },
};
</script>
