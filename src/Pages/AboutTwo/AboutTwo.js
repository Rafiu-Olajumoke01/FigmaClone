import React from 'react'
import "./AboutTwo.css"
import { TiTick } from "react-icons/ti";
function AboutTwo() {
    return (
        <div>
            <div className='About_Two'>
                <h2>لا توجد رسوم مخفية، يتم تجديد الاشتراك بنفس سعر الاشتراك.</h2>

                <div className="paymentMethod">

                    <img src={require("./../../Images/payments-1 1.png")} alt="" />

                    <h4>ادفع باستخدام فوري أو أكثر من 20 طريقة دفع أخرى</h4>

                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <p>التعافي من الكوارث المستند إلى السحابة. <TiTick /></p>
                        </div>

                        <div className="col-md-4">
                            <p>حماية البريد الإلكتروني والأرشفة. <TiTick /></p>
                        </div>

                        <div className="col-md-4">
                            <p>ااكتشاف التهديدات المتقدمة والاستجابة له<TiTick /></p>
                        </div>

                        <div className="col-md-4">
                            <p>إدارة ومراقبة مركزية<TiTick /></p>
                        </div>

                        <div className="col-md-4">
                            <p>إدارة ومراقبة مركزيا <TiTick /></p>
                        </div>

                        <div className="col-md-4">
                            <p>إدارة ومراقبة مركزية.<TiTick /></p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutTwo
