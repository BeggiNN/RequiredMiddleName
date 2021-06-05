define([
    'jquery',
    'Magento_Sales/order/create/scripts'
], function ($) {

    AdminOrder.prototype
        .setShippingMethod = function(shipping){
        if (shipping === 'shipping_shipping') {
            $(".admin__field.field.field-middlename")
                .addClass("required _required");
            $(".admin__field-control.control input.input-text.admin__control-text")
                .addClass("required-entry _required");
        }
        console.log(shipping);
    }
});
