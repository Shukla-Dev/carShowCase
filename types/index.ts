import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
	title: String;
	btnType?: 'button' | 'submit';
	containerStyles?: String;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	textStyle?: string;
	rightIcon?: string;
	isDisable?: boolean;
}

export interface OptionProps {
	title: string;
	value: string;
}

export interface CustomFilterProps {
	title: string;
	options: OptionProps[];
}

export interface SearchManufacturer {
	manufacturer: String;
	setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
	city_mpg: number;
	class: string;
	combination_mpg: number;
	cylinders: number;
	displacement: number;
	drive: string;
	fuel_type: string;
	highway_mpg: number;
	make: string;
	model: string;
	transmission: string;
	year: number;
}

export interface CarCardProps {
	car: CarProps;
}

export interface CarDetailsProp {
	isOpen: boolean;
	closeModal: () => void;
	car: CarProps;
}

export interface FilterProps {
	manufacturer: string;
	year: number;
	fuel: string;
	limit: number;
	model: string;
}

export interface ShowMoreProps {
	pageNumber: number;
	isNext: boolean;
}
