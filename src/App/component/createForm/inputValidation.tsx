export const name_validation = {
	name: "name",
	label: "Book Name",
	type: "text",
	multiline: false,
	id: "userName",
	placeholder: "Enter Book Name...",
	validation: {
		required: {
			value: true,
			message: "Required",
		},
		maxLength: {
			value: 30,
			message: "30 characters max",
		},
	},
};
export const author_validation = {
	name: "author",
	label: "Author",
	type: "text",
	multiline: false,
	id: "author",
	placeholder: "Enter name author...",
	validation: {
		required: {
			value: true,
			message: "Required",
		},
		maxLength: {
			value: 30,
			message: "30 characters max",
		},
	},
};
export const thumbnail_validation = {
	name: "thumbnail",
	label: "Thumbnail",
	type: "text",
	multiline: false,
	id: "thumbnail",
	placeholder: "Enter src thumbnail...",
	validation: {
		required: {
			value: true,
			message: "Required",
		},
	},
};

export const desc_validation = {
	name: "description",
	label: "description",
	type: "text",
	multiline: true,
	id: "description",
	placeholder: "write description ...",
	validation: {
		required: {
			value: true,
			message: "required",
		},
		maxLength: {
			value: 200,
			message: "200 characters max",
		},
	},
};
