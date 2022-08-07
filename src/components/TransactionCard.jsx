import React from 'react'

import logo from './../assets/img/waysbuck_logo.png'
import qrDummy from './../assets/img/qr-dummy.png'

function TransactionCard(props) {

  console.log(props.product)
  return (
    <div class="card bg-pink" style={{ maxWidth: 540, marginBottom: props.mb }}>
      <div class="row g-0 pt-3 px-3">

        <div class="col-md-8">
          {props.product.map((item) => {
            return (
              <div class="bg-pink" style={{ maxWidth: 540 }}>
                <div class="row g-0 align-items-center mb-3">

                  <div class="col-md-4">
                    <img src={item.img} class="img-fluid rounded-start" alt={item.name} />
                  </div>

                  <div class="col-md-8">
                    <div class="card-body text-red p-0 ps-3">
                      <h5 class="card-title">{item.name}</h5>
                      <small className='text-small'>
                        <p className="card-text"><strong> {props.day}</strong> {props.date}</p>
                        <p className='mb-2'><span className='text-brown'>Toping:</span>
                          {item.toping.map((item) => {
                            return ` ${item.name}, `
                          })}
                          .</p>
                        <p className='text-brown'>Price: {item.price}</p>
                      </small>
                    </div>
                  </div>

                </div>

              </div>
            )
          })}
        </div>

        <div class="col-md-4 d-flex flex-column align-items-center justify-content-center">
          <img src={logo} class="img-fluid rounded-start mb-3" alt="Logo Waysbuck" />
          <img src={qrDummy} class="img-fluid rounded-start mb-3" alt="QR Code" />
          <p>{props.status}</p>
          <p>Sub Total: {props.subTotal}</p>
        </div>

      </div>
    </div>
  )
}

export default TransactionCard
