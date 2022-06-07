const initialState = {
  accessToken:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYxLCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNjU0NTg0MDE4LCJleHAiOjE2NTUxODg4MTh9.pgp-1b1nDZ8tCz2a03ozxKfhVJvoTA6MT6r2yyJYW-3Lzt6yq4xO6mz_Qh7jtNJzHG6196zJzakCu0FDiRfc-SH6AuTPGCHHWqcBYYpr4bd-Y79LJAfKHzPrvWdCFws9mXvQteRIla32dQM5HXV9gzO4JR2WqdCcziuCWsnP5wdzck9wBhdw82H0hbD4mB0wZdf2_s7qRHspjmr9D7iVT_-b3t4paUbgGFK4ATMMY-slckPZl-A8PNjd_FlBPeeL32fbqIAlZ_y5AtifpXU2FcJCX4MTYGNu9goUzK5sv1ue98mMtHgnRX9Ix10pvabxHv_spfQLxzc_z_9rpUkTrA',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default authReducer;
