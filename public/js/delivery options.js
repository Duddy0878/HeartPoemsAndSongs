export const deliveryOptions = [
    {
        id:'1',
        deliveryDays: 7,
        price: 0,

    },
    {
        id: '2',
        deliveryDays: 3,         
        price: 499,
    },
    {
        id: '3',
        deliveryDays: 1,
        price: 999,
    }
];

export function getDeliveryOption(deliveryOptionId){
    let deliveryOption;

    deliveryOptions.forEach((Option) => {
      if(Option.id === deliveryOptionId){
        deliveryOption = Option;
      }
    });

    return deliveryOption || deliveryOption[0];
}

