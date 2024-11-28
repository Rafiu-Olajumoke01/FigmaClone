import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";

import "./last.css"

function LastPage() {
  return (
    <div className='last_h2'>
      <h2>ما الذي يميز</h2>

      <div className="container-fluid last_page">
        <div className="row ">
          <div className="col-md-4 parentchild">
            <img src={require("./../../Images/gear-icon 1.png")} alt="" className='img-fluid' />

            <h5> CDN تحسين أداء الموقع عبر </h5>

            <p>تعمل شبكة توصيل المحتوى (CDN) الخاصة بنا على تحسين سرعة تحميل الصفحة وتقليل أحمال الخادم بنسبة 80٪ في المتوسط ​​لتحسين أداء موقعك.</p>
          </div>

          <div className="col-md-4 parentchild">
            <img src={require("./../../Images/gear-icon 1.png")} alt="" />

            <h5> DDOsالتخفيف من هجمات </h5>

            <p>يمكن أن تتسبب هجمات حجب الخدمة الموزعة (DDoS) في التوقف التام لعملك. نحن نحظر هجمات DDoS للطبقات 3 و 4 و 7 ومع تأمين معدل نقل البيانات bandwidth أثناء الهجمات.</p>
          </div>


          <div className="col-md-4 parentchild">
            <img src={require("./../../Images/gear-icon 1.png")} alt="" />

            <h5> الحماية من عمليّات الاختراق والبرامج الخبيثة</h5>

            <p>قم بحماية موقعك من البرامج الضارة ومنع محاولات الاختراق وهجمات استغلال الثغرات Zero-Day وهجمات تخمين كلمة المرور Brute Force.
            </p>
          </div>

          <div className="col-md-4 parentchild">
            <img src={require("./../../Images/visitors-icon 1.png")} alt="" />

            <h5> الحماية من عمليّات الاختراق والبرامج الخبيثة</h5>

            <p>قم بحماية موقعك من البرامج الضارة ومنع محاولات الاختراق وهجمات استغلال الثغرات Zero-Day وهجمات تخمين كلمة المرور Brute Force.
            </p>
          </div>


          <div className="col-md-4 parentchild">
            <img src={require("./../../Images/ease-to-use-icon 1.png")} alt="" />

            <h5> الحماية من عمليّات الاختراق والبرامج الخبيثة</h5>

            <p>قم بحماية موقعك من البرامج الضارة ومنع محاولات الاختراق وهجمات استغلال الثغرات Zero-Day وهجمات تخمين كلمة المرور Brute Force.
            </p>
          </div>


          <div className="col-md-4 parentchild">
            <img src={require("./../../Images/ease-to-use-icon 1.png")} alt="" />

            <h5> الحماية من عمليّات الاختراق والبرامج الخبيثة</h5>

            <p>قم بحماية موقعك من البرامج الضارة ومنع محاولات الاختراق وهجمات استغلال الثغرات Zero-Day وهجمات تخمين كلمة المرور Brute Force.
            </p>
          </div>


          <div className="col-md-4 parentchild">
            <img src={require("./../../Images/Protect-icon 1.png")} alt="" />

            <h5> الحماية</h5>

            <p> بإستخدام أفضل الممارسات في مجال الأمان والإدارة وتحديثات البرامج والمزيد</p>
          </div>


          <div className="col-md-4 parentchild">
            <img src={require("./../../Images/Identify-icon 1.png")} alt="" />

            <h5> التعرف</h5>

            <p> على الثغرات الأمنية في البنية التحتية لتكنولوجيا المعلومات لديك وإجراء الاكتشاف التلقائي للأجهزة في شبكتك</p>
          </div>

          <div className="col-md-4 parentchild">
            <img src={require("./../../Images/detect-icon 1.png")} alt="" />

            <h5> التحقق</h5>

            <p> من التهديدات وتوفير دفاعات قوية ضد البرامج الضارة / برامج الفدية</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default LastPage
