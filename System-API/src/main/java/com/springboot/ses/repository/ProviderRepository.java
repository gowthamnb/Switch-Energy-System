package com.springboot.ses.repository;

import com.springboot.ses.pojo.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

@Repository
public class ProviderRepository {

    @Autowired
    private MongoTemplate mongoTemplate;

    public String enrollProvider(Provider newProvider) {
        mongoTemplate.save(newProvider);
        return "Provider enrolled!!";
    }

    public String updateStatus(String id, Provider updateProvider) {
        Query query = new Query().addCriteria(Criteria.where("id").is(id));
        Update update = new Update();
        if(updateProvider.getStatus() != null) {
            update.set("status", updateProvider.getStatus());
        }
        mongoTemplate.findAndModify(query, update, Provider.class);

        return "Status Updated!!";
    }
}
