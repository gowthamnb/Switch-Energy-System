package com.springboot.ses.repository;

import com.springboot.ses.pojo.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

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
        if(updateProvider.getStatus() == "Disabled") {

        }
        mongoTemplate.findAndModify(query, update, Provider.class);

        return "Status Updated!!";
    }

    public List<Provider> checkRates() {
        return mongoTemplate.findAll(Provider.class);
    }

    public List<Provider> getAllProviders() {
        return mongoTemplate.findAll(Provider.class);
    }
}
