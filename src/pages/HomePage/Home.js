import React from 'react'
import Header from 'components/HeaderComponent/Header'
import Footer from 'components/FooterComponent/Footer'
import { bannerThree, bannerTwo, bestImageOne, bestImageThree, bestImageTwo, goIconOne, goIconThree, goIconTwo, mainBanner, productionOne, productionThree, productionTwo, window } from 'assets/index'

import "./Home.css";
import { data } from './data';
import Cart from 'components/CartComponent/Cart';
import Button from 'components/ButtonComponent/Button';

const arrayItem = [
	{
		id: 1,
		title: "How to create mobile-optimized",
		image: bestImageOne,
		production: productionOne,
		icon: goIconOne,
	},
	{
		id: 2,
		title: "How to create mobile-optimized",
		image: bestImageTwo,
		production: productionTwo,
		icon: goIconTwo,
	},
	{
		id: 3,
		title: "How to create mobile-optimized",
		image: bestImageThree,
		production: productionThree,
		icon: goIconThree,
	},
];

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function Home() {
	return (
		<>
			<Header />
			<main>
				<section className="main-banner">
					<img src={mainBanner} alt="banner-main" />
				</section>
				<section className="banner-two">
					<img src={bannerTwo} alt="banner" />
					<div className="wrapper-banner-two ">
						<div className="container ">
							<div className="content-banner-two">
								<h1>
									what happened!
								</h1>
								<p>How to create mobile-optimized videos in minutes. Not a designer,
									every team makes a lot of videos Can be trimmed. Take the first
									step to your brand's success. How to create
									mobile-optimized videos in minutes.</p>
							</div>
						</div>
					</div>
				</section>
				<section className="banner-three">
					<img className="banner-three-image-main" src={bannerThree} alt="banner" />
					<div className="wrapper-banner-three">
						<div className="container">
							<div className="content-banner-three">
								<div className="banner-three-top">
									<h1>
										Best Product
									</h1>
									<p>
										How to create mobile-optimized videos in minutes. Not a designer,
										every team makes a lot of videos Can be trimmed. Take the first
									</p>
								</div>
								<div className="banner-three-bottom">
									{arrayItem.map((item, index) => {
										return (
											<div className="wrapper-item-banner-three" key={String(index)}>
												<img className="best-image" src={item.image} alt="hinh anh" />
												<div className="wrapper-production">
													<img className="production" src={item.production} alt="hinh anh" />
												</div>
												<div className="box">
													<div className="box-text">
														{item.title}
													</div>
													<div className="box-image">
														<img src={item.icon} alt="hinh anh" />
													</div>
												</div>
											</div>
										)
									})}
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="wrapper-list-item container">
					<div className="content-list-item">
						{data.map((item, index) => {
							return (
								<Cart key={String(index)} image={item.image} name={item.name} price={formatNumber(item.price)} numberHearth={item.numberHearth} />
							)
						})}
					</div>
					<div className="text-center">
						<Button content="See more" background="white" color="#222222" />
					</div>
				</section>
				<section className="banner-four">
					<div className="container wrapper-banner-four">
						<div className="banner-four-top">
							<h1>Brand story</h1>
							<p>
								모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
								다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
							</p>
						</div>
						<div className="banner-four-bottom">
							<img src={window} alt="hinh anh" className='banner-four-image-main' />
							<div className="banner-four-des">
								<div>
									<p>What Happened’s Brand story</p>
								</div>
								<div>
									청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
									봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
									긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
									인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
									아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.
								</div>
								<div className="banner-four-btn">
									<Button content="see more" background="white" color="#222222" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="banner-five">
					<div className="container wrapper-banner-five">
						<div className="wrapper-banner-five">
							{/* <div className="content-banner-five"> */}
							<h1>
								Happened’s issue
							</h1>
							<p>
								모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
								다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
							</p>
							<Button content="see more" background="#fcd32a" color="#222222" />
						</div>
						{/* </div> */}
					</div>
				</section>
				<section className="banner-six">
					<div className="container">

					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default Home
