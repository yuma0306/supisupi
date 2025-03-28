'use client';
import type { BlogType } from '@/libs/microcms.type';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './HomeFv.module.scss';
import 'swiper/scss';
import { media } from '@/constants/media';
import { HomeFvCard } from '../HomeFvCard/HomeFvCard';

type Props = {
	posts: BlogType[];
};

export const HomeFv = ({ posts }: Props) => {
	return (
		<div className={styles.fv}>
			<Swiper
				className={styles.slider}
				slidesPerView={1.5}
				spaceBetween={20}
				loop
				centeredSlides
				modules={[Navigation, Pagination]}
				pagination={{ clickable: true }}
				breakpoints={{
					[media.tab]: {
						slidesPerView: 3.5,
						spaceBetween: 20,
					},
					[media.pc]: {
						slidesPerView: 3.5,
						spaceBetween: 30,
					},
				}}
			>
				{posts.map(
					(post, index) =>
						post.eyecatch?.width &&
						post.eyecatch?.height &&
						post.publishedAt && (
							<SwiperSlide className={styles.sliderItem} key={index}>
								<HomeFvCard
									link={`/blog/${post.id}/`}
									image={post.eyecatch.url}
									width={post.eyecatch.width}
									height={post.eyecatch.height}
									time={post.publishedAt.slice(0, 10)}
									title={post.title}
									loading="eager"
									decoding="auto"
									priority
								/>
							</SwiperSlide>
						),
				)}
			</Swiper>
		</div>
	);
};
