package com.springboot.ses.controller;

import com.springboot.ses.SesApplication;
import com.springboot.ses.authrequest.Login;
import com.springboot.ses.dto.JwtTokenResponse;
import com.springboot.ses.repository.UserRepository;
import com.springboot.ses.service.JwtService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@RestController
@RequestMapping("auth")
@CrossOrigin("*")
public class LoginController {

    private static final Logger logger = LoggerFactory.getLogger(SesApplication.class);

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public JwtTokenResponse authenticateAndGetToken(@RequestBody Login authReq) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authReq.getUsername(), authReq.getPassword()));
        if(authentication.isAuthenticated()) {

            String token = jwtService.generateToken(authReq.getUsername());
            String userRole = userRepository.getRole(authReq.getUsername());
            logger.info(token);
            return (new JwtTokenResponse(token, userRole, authReq.getUsername()));
        }
        else {
            throw new UsernameNotFoundException(authReq.getUsername()+" not found!!");
        }
    }
}
