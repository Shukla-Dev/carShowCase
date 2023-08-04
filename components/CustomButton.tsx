'use client';

import Image from 'next/image';

import { CustomButtonProps } from '@/types';

const CustomButton = ({
	title,
	containerStyles,
	btnType,
	handleClick,
	textStyle,
	rightIcon,
	isDisable,
}: CustomButtonProps) => {
	return (
		<button
			disabled={false}
			type={btnType || 'button'}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}
		>
			<span className={`flex-1 ${textStyle}`}>{title}</span>
			{rightIcon && (
				<div className="relative w-6 h-6">
					<Image
						src={rightIcon}
						fill
						className="object-contain"
						alt="right icon"
					/>
				</div>
			)}
		</button>
	);
};

export default CustomButton;
