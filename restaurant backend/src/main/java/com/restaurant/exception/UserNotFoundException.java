package com.restaurant.exception;



public class UserNotFoundException extends RuntimeException{
    /**
	 * 
	 */
	private static final long serialVersionUID = 6757770938837215982L;

	public UserNotFoundException(Long id){
        super("Could not found the user with id "+ id);
    }

   

}
