import { Filter } from "../../models/filter";

export default interface TableProps {
    search: string;
    selectedFilter: Filter;
}