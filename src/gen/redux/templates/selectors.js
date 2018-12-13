export const select<%= name %> = state => state.<%= name_lower %>;
export const selectBool = state => select<%= name %>(state).bool;