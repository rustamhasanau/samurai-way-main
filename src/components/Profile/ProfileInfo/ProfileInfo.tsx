import React from "react";
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://az617363.vo.msecnd.net/imgmodels/albums/academic_centerc38ff2917d951ff9d2733e472d3e80a9_thumb.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>ava+discription</div>
        </div>

    );
}

