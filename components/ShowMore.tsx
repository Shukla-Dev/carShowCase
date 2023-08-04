'use client';
import { ShowMoreProps } from '@/types';
import { useRouter } from 'next/navigation';
import { CustomButton } from '.';
import { updateSearchParams } from '@/utils';

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
	const router = useRouter();

	const handleNavigation = () => {
		const newLimit = (pageNumber + 1) * 10;
		const newPathName = updateSearchParams('limit', String(newLimit));

		router.push(newPathName, { scroll: false });
	};

	return (
		<div className="w-full mt-10 flex-center gap-5">
			{!isNext && (
				<CustomButton
					title={'Show More'}
					btnType="button"
					containerStyles={'bg-primary-blue text-white rounded-full'}
					handleClick={handleNavigation}
				/>
			)}
		</div>
	);
};

export default ShowMore;
