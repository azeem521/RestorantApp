import React, { Fragment } from 'react'
import clasees from "./FaqPage.module.css"
const FaqPage = () => {
       const hideFaq=[
                {
                        id1:1,
                        title:"Are you currently offering dine-in service?",
                        description:" At the moment, we are only offering takeout and delivery services. Our focus is on providing the best possible experience for customers who choose to enjoy our food from the comfort of their own homes. We hope to offer dine-in service in the future, but for now, we are focusing on takeout and delivery to ensure the safety and satisfaction of our customers,"
                },
                {
                id1:2,
                title:" How far do you deliver, how quickly, and how much will it cost?",
                description:"We offer convenient delivery in Toronto and the nearby cities. Delivery order minimum is $25. Toronto on-demand delivery: Order placed within Toronto typically will arrive within 45 minutes to 1.5 hours, depending on traffic, your specific location and the number of items ordered. Delivery charges range from Free (up to six kilometers to $8-12. The exact delivery cost will be calculated at checkout.Nearby cities delivery: We offer next-day delivery to nearby citie for only $12-16. Specific cities we deliver to include: Mississauga Streetsville Oakville Brampton Woodbridge Thornhill Richmond Hill Oakridge Vaughan Aurora Newmarket Unionville Markham Scarboroug Pickering Ajax Whitby Oshawa Burlington For next-day delivery orders, place your order by the previous day at any time and we'll deliver between 3 pm and 8 pm on the next day (or on a date of your choice).If you have any questions or need your order sooner, please don't hesitate to contact us at 416-623-0317. We will be happy to assis you."
                },
                {
                        id1:3,
                        title:"When can I expect my pickup order to be ready?",
                        description:"preparation time may vary from 20 to 45 minutes depending on the number of items you have ordered.Desserts and baked goods are ready to enjoy as soon as you order them.During the checkout, you have the option to choose a preferred pickup date and time."
                },
                {
                        id1:4,
                        title:"Is your food keto-friendly or is it truly keto? We're not just keto-friendly.",
                        description:"We believe that our customers deserve the highest quality ingredients and so we only use the best.Sweeteners: Erythritol and Monk Oils: Extra virgin olive oil, coconut oil, avocado oil, MCT oil.Flour: Almond and Coconut flours. Meat and Poultry: organic, grass-fed, local farmers."
                },
        ]
  return (
   <Fragment>
    <div className={clasees.text}>
        <h1>Frequently Asked Questions</h1>
        <div class="accordion accordion-flush" id="accordionFlushExample">
        {
                hideFaq.map((data)=>{
                        return (
                               
                               
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
           {data.title}
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">{data.description}</div>
    </div>
  </div>
                        )
                })
        }
        </div>
</div>
   </Fragment>
  )
}

export default FaqPage;
