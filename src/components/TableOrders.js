import React, { useEffect } from "react";

const TableOrders = (props) => {
  useEffect(() => {
    console.log(props.order.length);
  });

  return (
    <div
      style={{
        maxWidth: "80rem",
        margin: "auto",
        marginBottom: "50px",
        padding: "20px",
        paddingBottom: "100px",
      }}
    >
      <div id="detailed-pricing" class="w-full overflow-x-auto ">
        <div class="overflow-hidden min-w-max">
          <div class="grid grid-cols-8 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 gap-x-16 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
            <div class="flex items-center">#</div>
            <div class="flex items-center">img ticket</div>
            <div>name ticket</div>
            <div>price ticket</div>
            <div>category ticket</div>
            <div>quantity ticket</div>
            <div>date command</div>
            <div>total price</div>
          </div>

          {props.order.length > 0
            ? props.order.map((itemOrder) => {
                return (
                  <div
                    key={itemOrder.idOrder}
                    class="grid grid-cols-8 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700"
                  >
                    <div>{itemOrder.idOrder} </div>
                    <div>
                      <img
                        src={itemOrder.img_ticket}
                        style={{ width: "50px" }}
                        alt={itemOrder.name_ticket}
                      />{" "}
                    </div>
                    <div>{itemOrder.name_ticket} </div>
                    <div>{itemOrder.price_ticket} </div>
                    <div>{itemOrder.category_ticket} </div>
                    <div>{itemOrder.Quantity_ticket} </div>
                    <div>{itemOrder.date_command} </div>
                    <div>
                      {itemOrder.price_ticket * itemOrder.Quantity_ticket} ${" "}
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default TableOrders;
