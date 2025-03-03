import styles from '@/components/CardLink2/CardLink2.module.scss';
import Image, { type ImageProps } from 'next/image';
import Link from 'next/link';

type Props = {
	link: string;
	image: string;
	width: number;
	height: number;
	time: string;
	title: string;
} & Omit<ImageProps, 'src' | 'width' | 'height' | 'alt'>;

export const CardLink2 = ({
	link,
	image,
	width,
	height,
	time,
	title,
	...restProps
}: Props) => {
	return (
		<Link className={styles.link} href={link}>
			<div className={styles.imageWrapper}>
				<Image
					className={styles.image}
					alt={''}
					src={image}
					width={width}
					height={height}
					{...restProps}
				/>
			</div>
			<div className={styles.info}>
				<time date-time={time} className={styles.time}>
					{time}
				</time>
				<p className={styles.title}>{title}</p>
			</div>
		</Link>
	);
};
