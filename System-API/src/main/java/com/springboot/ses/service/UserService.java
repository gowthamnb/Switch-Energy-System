package com.springboot.ses.service;

import com.springboot.ses.pojo.User;
import com.springboot.ses.repository.UserRepository;
import com.springboot.ses.config.SignUpUserDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    public String role = "ROLE_USER";

    public String signUp(User newUser) {
        newUser.setUsername(newUser.getEmail());
        newUser.setRoles(role);
        return userRepository.signUp(newUser);
    }

   @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> signUp = Optional.ofNullable(userRepository.findById(username));
        return signUp.map(SignUpUserDetails::new)
                .orElseThrow(()->new UsernameNotFoundException(username+" not found!!"));
    }

}
