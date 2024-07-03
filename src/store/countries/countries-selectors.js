export const selectAllCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  quantity: state.countries.list.length,
})

export const selectAllCountries = state => state.countries.list;
export const selectVisibleCountries = (state, { search = '', region = '' }) => {
  return state.countries.list.filter((country) => {
    return country.name.toLowerCase().startsWith(search.toLowerCase()) && country.region.includes(region);
  })
}