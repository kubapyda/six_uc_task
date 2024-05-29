export interface Paginate<T> {
  docs:          T[];
  hasNextPage:   boolean;
  hasPrevPage:   boolean;
  limit:         number | null;
  nextPage:      number | null;
  prevPage:      number | null;
  page:          number | null;
  pagingCounter: number | null;
  totalDocs:     number | null;
  totalPages:    number | null;
}
