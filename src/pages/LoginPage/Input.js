import React from 'react'

function Input({
	className,
	titleInput,
	htmlFor,
	name,
	placeholder,
	value,
	onChange,
	errorInput,
}) {
	return (
		<div className={className}>
			<label className="form-label" htmlFor={htmlFor}>
				<p>{titleInput}</p>
				<input
					type="text"
					id={htmlFor}
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={onChange}
					className="form-control form-control-input"
				/>
			</label>
			{errorInput?.length > 0 && (
				<small className="form-error">{errorInput}</small>
			)}
		</div>
	)
}

export default Input
