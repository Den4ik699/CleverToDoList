export const CHANGE_CURRENT_DATE = 'CHANGE_CURRENT_DATE'

export const setCurrentDate = (currentDate) => {
    return {
        type: CHANGE_CURRENT_DATE,
        payload: currentDate
    }
}
