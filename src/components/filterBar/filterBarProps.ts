import { Filter } from "../../models/filter";

export default interface FilterBarProps {
    selectedFilter: Filter,
    setSelectedFilter: (f: Filter) => void
}