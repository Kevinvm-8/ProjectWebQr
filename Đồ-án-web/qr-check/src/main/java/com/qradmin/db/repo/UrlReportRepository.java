package com.qradmin.db.repo;

import com.qradmin.db.UrlReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.List;


public interface UrlReportRepository extends MongoRepository<UrlReport,String> {


}
