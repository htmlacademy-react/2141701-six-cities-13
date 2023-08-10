import {useAppDispatch} from '../../hooks/index';
import {changeSortTask} from '../../store/action';
import useToggle from '../../hooks/use-toggle';

type SortedItemProps = {
  allSortTask: string[];
  currentSortTask: string;
}

function SortedItems({allSortTask, currentSortTask}: SortedItemProps) {
 const [isVisible, toggleVisible] = useToggle(false);
  const dispatch = useAppDispatch();

  const handleClickTaskSort = (item: number) => {
    dispatch(changeSortTask(allSortTask[item]));
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={toggleVisible}>
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                {currentSortTask}
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className={`places__options places__options--custom ${isVisible ? 'places__options--opened' : '' }`}>
                  {allSortTask.map((item, index) => (<li key={item} onClick={()=>handleClickTaskSort(index)}
                    className="places__option places__option--active"
                    tabIndex={0}
                                                     >
                       {item}
                                                     </li>))}
                </ul>
    </form>
  );
}

export default SortedItems;
