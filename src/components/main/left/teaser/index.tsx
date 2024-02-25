import * as React from 'react';

import Block from '../../../base/Block';
import Image from '../../../base/Image';
import SmokeText from '../../../base/SmokeText';

import { insertStyle } from '@/utils/slotSheet';

export default ({item, locator, index, transform}) => {
	const {
		body,
		domain,
		images,
		region,
		title,
		warning,
	} = item;

	let image_src;
	let image_width;
	let image_height;

	if (images[0]) {
		[image_src, image_width, image_height] = images[0];
		let name = '.mimic_left .teaser .picture .image#im'+index;
		let imageStyle={[name]: {
				'width':`${image_width}px`,
				'height': `${image_height}px`,
				'background-image': `url(${image_src})`,
			}
		}
		insertStyle(locator, imageStyle);
	}

			
	

	const classes = [
		transform('teaser'),
	];

	if (image_src) {
		classes.push(transform('teaser_image'));
	}


	return (
		<Block className={classes.join(' ')}>

			<Block className={transform('title')}>
				{title}
			</Block>

			{image_src && (
				<Block className={transform('picture')}>
					<Image
						className={transform('image')}
						id={'im'+index}
					/>
				</Block>
			)}

			<Block className={transform('content')}>
				{body}
			</Block>

			{warning && (
				<Block className={transform('warning')} >
					<SmokeText>{warning}</SmokeText>
				</Block>
			)}

			<Block className={transform('contacts')}>

				<Block className={transform('contacts__item contacts__item_link')}>
					<SmokeText>{domain}</SmokeText>
				</Block>

				{region && (
					<Block className={transform('contacts__item')}>
						<SmokeText>{region}</SmokeText>
					</Block>
				)}
			</Block>
		</Block>
	);
};
