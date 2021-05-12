export const formatDate = (date: Date): string => {

	const formatedDate = new Date(date);

	let day: any = formatedDate.getDate();
	let month: any = formatedDate.getMonth() + 1;
	let year: any = formatedDate.getFullYear();

	if (day <= 9) day = '0' + day;
	if (month <= 9) month = '0' + month;

	return `${day}/${month}/${year}`;

}
