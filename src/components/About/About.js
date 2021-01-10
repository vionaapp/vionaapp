import React from 'react';
import Img from 'gatsby-image';
import CustomBtn from '../CustomBtn/CustomBtn';
import WhatsappLink from '../WhatsappLink/WhatsappLink';

function About({ one, two }) {
	return (
		<div className="container mt-4">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-12 col-12 pb-3">
					<Img fluid={one} alt="img" className="img-fluid" />
					<Img fluid={two} alt="img" className="img-fluid" />
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
					<h3 style={{ fontWeight: 'bold' }} className="text-right">
						درباره ویونا اپ
					</h3>
					<p className="text-right mt-4" dir="rtl">
						درباره ویونا اپ نوآوری در فناوری، هوشمندی در کسب و کار ما از سال ۱۳٧۹ در زمینه فناوری اطلاعات
						فعالیت می‌کنیم؛ برای بسیاری از کسب‌و‌کارهای کوچک و بزرگ پروژه‌های زیادی را به انجام رساندیم که
						از نتیجه کار راضی و خوشحال بوده‌اند. ما برای پیدا کردن بهترین راه‌حل همیشه بروز هستیم و با تفکر
						طراحی محور و با در نظر گرفتن نیازهای مشتریان و مخاطبان شما بهترین و مقرون بصرفه ترین راهکار
						اجرایی را در سریعترین زمان ممکن به شما ارائه می دهیم.
					</p>
					<p className="text-right" dir="rtl">
						امنیت، یکپارچگی، سادگی در توسعه، به روزرسانی و پشتیبانی مداوم از مزیت های خدمات ماست. در دنیای
						دیجیتال، شما می توانید سکان‌دار کسب و کار خود در فضای مجازی باشید. سادگی در مدیریت، کارایی در
						عملکرد و متناسب با نیاز شما، فروش محصولات خوب شما بی‌وقفه ادامه خواهد داشت و شما به بازارهای
						جدیدی دست خواهید یافت. این رسالت ماست تا این مهم را به انجام برسانیم.
					</p>

					<p className="text-right" dir="rtl">
						شرکت گروه نرم افزاری ویونا اپ با سرمایه نیروی انسانی نخبه و متخصص و با پشتوانه مشتریانی وفادار و
						ماندگار و در کنار توکل بر خدا مسیر طولانی پیشرفت را طی ١ سال با سرعتی زیاد طی کرده است و هم
						اکنون در کنار بزرگان صنعت فناوری اطلاعات و ارتباطات کشور و با در نظر گرفتن پیشرفت و توسعه کشور
						عزیزمان در حوزه های فناوری اطلاعات چشم به افق هایی دوخته است که در آن صادرات خدمات فنی و مهندسی
						فناوری اطلاعات به بزرگترین قدرت های این حوزه انجام پذیرد .
					</p>

					<p dir="rtl" className="text-right">
						می توانید همین الان سفارش خود را از طریق واتساپ برامون بفرستید.
					</p>
					<div className="d-flex justify-content-end pb-3">
						<WhatsappLink>
							<CustomBtn>سفارش برنامه</CustomBtn>
						</WhatsappLink>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
