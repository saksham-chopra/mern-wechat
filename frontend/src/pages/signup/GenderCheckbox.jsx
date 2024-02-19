import React from 'react'

const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
    return (
        		<div className='flex'>
        			<div className='form-control'>
        				<label className={`label gap-2 cursor-pointer ${selectedGender==="male"?"selcted":""}`}>
        					<span className='label-text'>Male</span>
        					<input type='checkbox' className='checkbox border-slate-900' 
                            checked={selectedGender==="male"}
                            onChange={()=> onCheckboxChange("male")}
                            />
        				</label>
        			</div>
        			<div className='form-control'>
        				<label className={`label gap-2 cursor-pointer ${selectedGender==="female"?"selcted":""}`}>
        					<span className='label-text'>Female</span>
        					<input type='checkbox' className='checkbox border-slate-900' 
                            checked={selectedGender==="female"}
                            onChange={()=> onCheckboxChange("female")}/>
        				</label>
        			</div>
        		</div>
        	);
        };

export default GenderCheckbox