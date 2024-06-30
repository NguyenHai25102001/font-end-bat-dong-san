import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {acreageType} from "../type";

const  AcreageHouse = ({className}:acreageType) => {
    return (
        <>
            <button type={'button'}
                    className={`flex  items-center border border-white  p-2 rounded  w-full ${className}`}
                    id="dropdownDTT" data-dropdown-toggle="dropdownDT">
                <div className="">Diện tích</div>
                <div className="ml-auto">
                    <FontAwesomeIcon icon={faAngleDown}/>
                </div>
            </button>

            <div id="dropdownDT"
                 className="z-10 text-black  hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-[300px] dark:bg-gray-700 dark:divide-gray-600">
                <div className='p-2'>
                    <div className="flex items-center justify-between">
                        <input type="number"
                               className={' w-[100px] focus-visible:outline-0 border-2 text-center py-1 rounded'}
                               placeholder={'Từ'}/>
                        <div className="">
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </div>
                        <input type="number"
                               className={' w-[100px] focus-visible:outline-0 border-2 text-center py-1 rounded'}
                               placeholder={'Đến'}/>

                    </div>
                    <div className="mt-5">
                        <div
                            className={'mb-3 hover:bg-gray-300 px-2 py-2 cursor-pointer'}>Tất
                            cả diện tích
                        </div>

                        <div
                            className={'mb-3 hover:bg-gray-300 px-2 py-2 cursor-pointer'}>Tất
                            cả mức
                            giá
                        </div>


                    </div>

                </div>

            </div>
        </>
    );
}
export default AcreageHouse;