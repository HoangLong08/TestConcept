import { iconOne, iconThree, iconTwo } from 'assets/index';
import React from 'react'
import { Link } from 'react-router-dom';

import "./Footer.css";

function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="wrapper-footer">
					<div className="footer-one">
						<h3 className="footer-title">what happened</h3>
						<ul>
							<li>
								<Link to="/">
									[공지] 개인 정보 처리 방침 변경 사전 안내
								</Link>
							</li>
							<li>
								<Link to="/">
									[공지] 29CM 강남 스토어 영업 종료
								</Link>
							</li>
							<li>
								<Link to="/">
									[공지] 개인 정보 처리 방침 변경 사전 안내
								</Link>
							</li>
							<li>
								<Link to="/">
									[공지] iOS 10 이하 버전 지원 중단 안내
								</Link>
							</li>
							<li>
								<Link to="/">
									[공지] 개인 정보 처리 방침 변경 사전 안내
								</Link>
							</li>
						</ul>
					</div>
					<div className="footer-item-common footer-two">
						<h3 className="footer-title">about us</h3>
						<ul>
							<li>
								<Link to="/">
									회사 소개
								</Link>
							</li>
							<li>
								<Link to="/">
									인재 채용
								</Link>
							</li>
							<li>
								<Link to="/">
									상시 할인 혜택
								</Link>
							</li>
						</ul>
					</div>
					<div className="footer-item-common">
						<h3 className="footer-title">my order</h3>
						<ul>
							<li>
								<Link to="/">

									내 주문
								</Link>
							</li>
							<li>
								<Link to="/">
									주문 배송

								</Link>
							</li>
							<li>
								<Link to="/">
									취소 / 교환 / 반품 내역
								</Link>
							</li>
							<li>
								<Link to="/">
									상품 리뷰 내역
								</Link>
							</li>
							<li>
								<Link to="/">
									상품 리뷰 내역
								</Link>
							</li>
						</ul>
					</div>
					<div className="footer-item-common">
						<h3 className="footer-title">my account</h3>
						<ul>
							<li>
								<Link to="/">
									회원 정보 수정

								</Link>
							</li>
							<li>
								<Link to="/">
									회원 등급
								</Link>
							</li>
							<li>
								<Link to="/">
									마일리지 현황
								</Link>
							</li>
							<li>
								<Link to="/">
									쿠폰
								</Link>
							</li>
						</ul>
					</div>
					<div className="footer-item-common">
						<h3 className="footer-title">help</h3>
						<ul>
							<li>
								<Link to="/">
									1 : 1 상담 내역
								</Link>
							</li>
							<li>
								<Link to="/">
									상품 Q & A 내역
								</Link>
							</li>
							<li>
								<Link to="/">
									공지 사항
								</Link>
							</li>
							<li>
								<Link to="/">
									자주하는 질문
								</Link>
							</li>
							<li>
								<Link to="/">
									고객의 소리
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-copy-right">
					<p>
						© 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
						서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침
					</p>
					<ul className="footer-menu">
						<li>
							<img src={iconOne} alt="icon" />
						</li>
						<li>
							<img src={iconTwo} alt="icon" />
						</li>
						<li>
							<img src={iconThree} alt="icon" />
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
