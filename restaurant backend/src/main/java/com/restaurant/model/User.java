package com.restaurant.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class User {
	  	@Id
	    @GeneratedValue
	    private Long id;
	    private String name;
	    private long phno;
	    private String item;
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public long getPhno() {
			return phno;
		}
		public void setPhno(long phno) {
			this.phno = phno;
		}
		public String getItem() {
			return item;
		}
		public void setItem(String item) {
			this.item = item;
		}

	    
	    

	    
	  
}
