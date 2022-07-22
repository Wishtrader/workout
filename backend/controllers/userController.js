	// @desc GET user profile
	// @route GET /api/users/profile
	// @access Private
	export const getUserProfile = (req, res) => {
		const user = {
			name: 'userName',
			age: 'userAge'
		}

		res.json(user);	
	}