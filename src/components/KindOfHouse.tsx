import Select from "react-select";
import makeAnimated from "react-select/animated";
import {houseType} from "../type";

const animatedComponents = makeAnimated();
const KindOfHouse = ({className}:houseType) => {


    const options = [
        {value: 'chocolate', label: 'Căn hộ trung cư'},
        {value: 'strawberry', label: 'Chưng cư mini'},
        {value: 'vanilla', label: 'Nhà riêng'}
    ]
    return (

            <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                defaultValue={[]}
                isMulti
                placeholder={'Loại nhà...'}
                options={options} className={`${className}`}/>

    )

}
export  default  KindOfHouse;