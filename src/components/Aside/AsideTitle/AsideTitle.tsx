import React from 'react';
import { useDispatch } from 'react-redux';
import { clearAside } from '../../../redux/actions/asideAction';
import { ArrowTopIcon } from '../../Basic/Icons';
import { AsideTitleStyled } from './AsideTitleStyled';

const AsideTitle:React.FC = () => {
  const dispatch = useDispatch();
  return (
    <AsideTitleStyled>
      <div
        className="aside-back"
      >
        <ArrowTopIcon />
        <span>Back</span>
      </div>
      <div className="aside-title__name">My order</div>
      <div
        className="aside-title__remove"
        role="button"
        tabIndex={0}
        onClick={() => dispatch(clearAside())}
      >
        Clear
      </div>
    </AsideTitleStyled>
  );
};

export default AsideTitle;
