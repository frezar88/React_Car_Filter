import React from 'react';
import s from './SortingPyramid.module.scss'
import ResultStore from '../../store/resultStore'

const SortingPyramid = () => {
    const click = (e) => {
        switch (e.currentTarget.className) {
            case s.SortingPyramid:
                e.currentTarget.className =[s.SortingPyramid,s.active].join(' ')
                ResultStore.setSortState('asc')
                break
            case [s.SortingPyramid,s.active].join(' '):
                e.currentTarget.className =[s.SortingPyramid,s.active,s.reverse].join(' ')
                ResultStore.setSortState('desc')
                break
            case [s.SortingPyramid,s.active,s.reverse].join(' '):
                e.currentTarget.className =s.SortingPyramid
                ResultStore.setSortState('')
                break
            default:
                break;
        }
    }
    return (
        <div onClick={click} className={s.SortingPyramid}>
            <div>цене</div>
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default SortingPyramid;