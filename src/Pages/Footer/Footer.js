import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
  return (
    <div>
      <div className="container-fluid footerParent">
        <div className="row">
          <div className="col-md-8 footMain">
            <h2> (VPS)ما هو المُخدّم الافتراضي المخصص ؟</h2>

            <p>المخدم الافتراضي هو مُخدّم مقسم إلى بيئات استضافة منفصلة تمامًا. عندما يكون لديك استضافة VPS ، فإن إحدى تلك البيئات مخصصة لك بالكامل. هذا يعني أنك لست مضطرًا إلى مشاركة الموارد (مثل ذاكرة الوصول العشوائي أو وحدة المعالجة المركزية) مع العملاء الآخرين ومن غير المرجح أن تتأثر بسلوكهم.</p>

            <div>
              <p>متى يجب علي استخدام استضافة VPS بدلًا من الاستضافة المشتركة؟</p>
            </div>

            <div>
              <p>ما الفرق بين المُخدّم الافتراضي والمُخدّم المخصص؟</p>
            </div>

          </div>

          <div className="col-md-4 footerSide" >
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
